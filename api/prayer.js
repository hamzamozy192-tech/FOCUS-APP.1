export default async function handler(req, res) {
  var city = req.query.city || "القاهرة";
  try {
    var url = "https://api.aladhan.com/v1/timingsByCity?city=" + encodeURIComponent(city) + "&country=Egypt&method=5";
    var r = await fetch(url);
    var data = await r.json();
    res.setHeader("Cache-Control", "s-maxage=3600");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ code: 500 });
  }
}
