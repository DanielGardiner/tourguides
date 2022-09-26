import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingSpinner() {

  const override = {
    background: 'white',
  };

  return (
    <ClipLoader color={'#2590EB'} speedMultiplier={0.6} loading={true} cssOverride={override} size={50} />
  )
}
