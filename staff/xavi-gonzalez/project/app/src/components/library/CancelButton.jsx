import RoundButton from './RoundButton'

function CancelButton(props) {
    return <RoundButton className="cancel-button bg-[#c59a92]" onClick={props.onClick}>{props.children || 'Cancel'}</RoundButton>
}

export default CancelButton