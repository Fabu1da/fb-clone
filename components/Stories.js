import Storycard from '../components/Storycard'

const stories = [
    {
        id:1,
        name: "Beyonce Knowles",
        src: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/32/1471002537-gettyimages-453482991.jpg",
        profile: "https://cdn.prod.www.spiegel.de/images/0da54d3d-0b9f-4fe9-8255-6f697d21f976_w948_r1.778_fpx49_fpy31.jpg"
    },

    {
        id:2,
        name: "The Ben",
        src: "https://www.ktpress.rw/wp-content/uploads/2019/04/THE-BEN.jpg",
        profile: "https://www.ktpress.rw/wp-content/uploads/2020/09/IMG-20200826-WA0015.jpg"
    },
    {
        id:3,
        name: "LoveBoy",
        src: "https://guardian.ng/wp-content/uploads/2019/07/Burna-Boy.jpg",
        profile: "https://www.16bars.de/wp-content/uploads/2019/07/Bildschirmfoto-2019-07-31-um-16.43.25.png"
    },
    {
        id:4,
        name: "JasonDerulo",
        src: "https://i0.wp.com/popkultur.de/wp-content/uploads/bigsjasonde.jpg",
        profile: "http://www.laut.de/Jason-Derulo/jason-derulo-188941.jpg"
    },
]
const Stories = () =>{
    return(
        <>
        <div className="flex justify-center space-x-3 mx-auto">
          {stories.map(function(story){
             return(
                 <Storycard 
                    key={story.id}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}/>
             ) 
          })}
        </div>
        </>
    )
}

export default Stories