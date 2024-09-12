import Card from "../components/Card";

function Foreground() {

    const data = [
        {
            desc: 'This is the background color of the card that will be displayed',
            filesize: '0.4mb',
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: 'green' },
        },
        {
            desc: 'This is the background color of the card that will be displayed',
            filesize: '0.4mb',
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: 'blue' },
        },
        {
            desc: 'This is the background color of the card that will be displayed',
            filesize: '0.4mb',
            close: true,
            tag: { isOpen: false, tagTitle: "Upload", tagColor: 'green' },
        },
    ]




    return (
        <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
           {data.map((item, index)=>(
            <Card data={item}/>
           ))}
        </div>
    )
}

export default Foreground;