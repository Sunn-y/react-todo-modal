export default function Backdrop({ onPreventCancel }) {
  return <div className='backdrop' onClick={onPreventCancel} />;
}
