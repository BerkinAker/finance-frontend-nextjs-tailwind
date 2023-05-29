
const PrimaryButton = ({text, textColor, bgColor}) => {
  return (
    <div className={`primary-button-animation relative bg-[${bgColor}] w-[200px] rounded-md mx-auto my-6 py-3 font-medium ${textColor} cursor-pointer upper`}>{text}</div>
  )
}

export default PrimaryButton