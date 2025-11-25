const supabase = require("../utils/db");
const s3 = require("../utils/r2Client");

const getReels = async (req, res) => {
    const { data, error } = await supabase.from("reels").select("*");
    if (error) return res.status(500).json({ message: error.message });
    res.json(data);
};

const uploadReel = async (req, res) => {
    try {
        const { title, fileBase64, fileName } = req.body;

        // Upload video to R2
        const buffer = Buffer.from(fileBase64, "base64");
        await s3.putObject({
            Bucket: "reels-videos",
            Key: fileName,
            Body: buffer,
            ContentType: "video/mp4",
        }).promise();

        const url = `https://<R2_CDN_URL>/${fileName}`; // Replace with your CDN URL

        // Save metadata in Supabase
        const { data, error } = await supabase.from("reels").insert([{ title, url }]);
        if (error) return res.status(500).json({ message: error.message });

        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getReels, uploadReel };
