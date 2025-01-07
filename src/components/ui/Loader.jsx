
import React from 'react'
import './loader.css'
import { style } from 'framer-motion/client'

const Loader = ({ size=45 }) => {
	return (
		<div className="container-loader"
		style={{
			'--uib-size': `${size}px`
		}}
		><div className="dot" /></div>
	)
}

export default Loader










