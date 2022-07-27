import "./testimonials.scss"

export default function Testimonials() {
  const data = [
  {
    id: 1,
    name: "Tom Durden",
    title: "Senior Developer",
    img:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "assets/twitter.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },
  {
    id: 2,
    name: "Tom Durden",
    title: "Senior Developer",
    img:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "assets/twitter.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      featured: true,
  },
  {
    id: 3,
    name: "Tom Durden",
    title: "Senior Developer",
    img:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "assets/twitter.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },
];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
      {data.map((d) => ( 
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
          <img src="assets/External Link Arrow.webp" 
          className="left"/>
          <img src="assets/bull nft profile.png" 
          className="user"/>
          <img src={d.img}
           className="right"/>
          </div>
          <div className="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="bottom">
            <h3>Ken</h3>
            <h4>Ceo of SpaceX</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
