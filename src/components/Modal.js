export default function Modal({ isWobble, onCancel, onConfirm }) {
  const classNames = isWobble ? 'modal wobble-hor-bottom' : 'modal';
  return (
    <div className={classNames}>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={onCancel}>
        Cancel
      </button>
      <button className='btn' onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
}
