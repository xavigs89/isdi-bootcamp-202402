import RoundButton from './RoundButton'

// import './CancelButton.sass'

function CancelButton(props) {
    return <RoundButton className="cancel-button bg-[#E77D67]" onClick={props.onClick}>{props.children || 'Cancel'}</RoundButton>
}

export default CancelButton