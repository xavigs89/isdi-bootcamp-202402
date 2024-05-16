import RoundButton from './RoundButton'

function SubmitButton(props) {
    return <RoundButton className="submit-button font-semibold bg-[#F4C84B]" type={props.type}>{props.children || 'Submit'}</RoundButton>
}

export default SubmitButton