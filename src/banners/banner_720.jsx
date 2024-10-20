'use client'
import { useEffect, useRef } from 'react'
// import { isMobile } from 'react-device-detect';


export default function Banner_720() {
    const banner = useRef()

    const atOptions = {
		'key' :  '4bd89b9d7e21eeaf2c53fc627ab54365',
		'format' : 'iframe',
		'height' :  90,
		'width' :  728,
		'params' : {}
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//affordspoonsgray.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 w-fit flex justify-center items-center text-white text-center" ref={banner}></div>
}