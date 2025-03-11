import OutlineButton from "./outline-button";

interface AcceptRejectActionButtonProps {
  actionTitle: string;
  longActionTitle: string;
  onAccept?: () => void;
  onReject?: () => void;
  onAction?: () => void;
}

export default function AcceptRejectActionButton({actionTitle, longActionTitle, onAccept, onReject, onAction}: AcceptRejectActionButtonProps) {
  return (
  <div>
    <OutlineButton title={longActionTitle} onClick={onAction} className="sm:hidden"/>
    <div className="mb-2 flex justify-between gap-2 grid-cols-3">
      <OutlineButton title="Reject All" onClick={onReject}/>
      <OutlineButton title={actionTitle} onClick={onAction} className="hidden sm:block"/>
      <OutlineButton title="Accept All" onClick={onAccept} />
    </div>
  </div>
  );
}
