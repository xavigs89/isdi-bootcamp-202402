import RoundButton from './RoundButton'

function CancelButton(props) {
    return <RoundButton className="cancel-button bg-[#9AA8A8]" onClick={props.onClick}>{props.children || 'Cancel'}</RoundButton>
}

export default CancelButton