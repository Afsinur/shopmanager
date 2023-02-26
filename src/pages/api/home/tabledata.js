let tableData = [
  {
    name: "Jahidul Islam Hridoy",
    phoneNumber: "017xxxxxxx1",
    date: "2 Feb 2023",
    catagory: "paid",
  },
  {
    name: "Shahriar MD. Afsinur Rahman",
    phoneNumber: "017xxxxxxx2",
    date: "3 Feb 2023",
    catagory: "unpaid",
  },
  {
    name: "MD Safwanur Rahman Sayem",
    phoneNumber: "017xxxxxxx3",
    date: "4 Feb 2023",
    catagory: "paid",
  },
  {
    name: "Jahidul Islam Hridoy",
    phoneNumber: "017xxxxxxx1",
    date: "2 Feb 2023",
    catagory: "paid",
  },
  {
    name: "Shahriar MD. Afsinur Rahman",
    phoneNumber: "017xxxxxxx2",
    date: "3 Feb 2023",
    catagory: "unpaid",
  },
  {
    name: "MD Safwanur Rahman Sayem",
    phoneNumber: "017xxxxxxx3",
    date: "4 Feb 2023",
    catagory: "paid",
  },
  {
    name: "Jahidul Islam Hridoy",
    phoneNumber: "017xxxxxxx1",
    date: "2 Feb 2023",
    catagory: "paid",
  },
  {
    name: "Shahriar MD. Afsinur Rahman",
    phoneNumber: "017xxxxxxx2",
    date: "3 Feb 2023",
    catagory: "unpaid",
  },
  {
    name: "MD Safwanur Rahman Sayem",
    phoneNumber: "017xxxxxxx3",
    date: "4 Feb 2023",
    catagory: "paid",
  },
  {
    name: "Jahidul Islam Hridoy",
    phoneNumber: "017xxxxxxx1",
    date: "2 Feb 2023",
    catagory: "paid",
  },
  {
    name: "Shahriar MD. Afsinur Rahman",
    phoneNumber: "017xxxxxxx2",
    date: "3 Feb 2023",
    catagory: "unpaid",
  },
  {
    name: "MD Safwanur Rahman Sayem",
    phoneNumber: "017xxxxxxx3",
    date: "4 Feb 2023",
    catagory: "paid",
  },
];

export default function handler(req, res) {
  res.status(200).json({ tableData });
}
