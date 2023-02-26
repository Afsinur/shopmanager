let tableHead = ["Name", "Phone Number", "Date", "Catagory"];

export default function handler(req, res) {
  res.status(200).json({ tableHead });
}
