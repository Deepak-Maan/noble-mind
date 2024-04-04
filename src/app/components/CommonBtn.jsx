const CommonBtn = (props) => {
    return (
        <div>
            <button className=' bg-btn px-6 py-[14px] relative overflow-hidden common-btn rounded text-white font-semibold text-base leading-6 z-10 font-Outfit '>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text">{props.text}</span>
            </button>
        </div>
    )
}
export default CommonBtn
