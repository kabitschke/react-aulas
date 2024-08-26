type Props = {
  image: string;
  closeModal: () => void;
}
export const Modal = ({ image, closeModal }: Props) => {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black/90">
        <img src={`/img/${image}`} alt={`/img/${image}`}
          className="max-w-screen max-h-screen"
          onClick={closeModal} />

      </div>

      <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={closeModal} >
        X
      </div>
    </>
  )

}