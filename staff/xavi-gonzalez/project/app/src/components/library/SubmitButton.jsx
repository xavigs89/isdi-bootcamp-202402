import RoundButton from './RoundButton'

function SubmitButton(props) {
    return <RoundButton className="submit-button bg-[#249D8C]" type={props.type}>{props.children || 'Submit'}</RoundButton>
}

export default SubmitButton