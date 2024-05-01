import RoundButton from './RoundButton'

// import './SubmitButton.sass'

function SubmitButton(props) {
    return <RoundButton className="bg-[#bcda53]" type={props.type}>{props.children || 'Submit'}</RoundButton>
}

export default SubmitButton