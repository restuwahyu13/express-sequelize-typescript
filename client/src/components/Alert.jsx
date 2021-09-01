import React from 'react'

function Alert(props) {
	return (
		<div>
			{props.disabled === undefined && props.message !== undefined && alert(props.message)}
			{props.redirect !== undefined && props.message !== undefined && props.message === props.validate && props.redirect}
		</div>
	)
}

export default Alert
