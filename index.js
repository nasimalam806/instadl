const instagramGetUrl = require("instagram-url-direct");

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const links = await instagramGetUrl(url);
    // links.url_list me aapko download links mil jayenge
    res.status(200).json({
      status: "success",
      download_link: links.url_list[0] 
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
