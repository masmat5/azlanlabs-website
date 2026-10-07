import { MessageCircle, ShieldCheck, Wallet } from "lucide-react";

export default function Why() {
  return (
    <section className="section why">
      <div className="why-inner">
        <h2>Why hire a one-person studio?</h2>
        <ul>
          <li><MessageCircle /><span><b>Direct line.</b> Your messages go to the developer, not a project manager.</span></li>
          <li><Wallet /><span><b>Fair pricing.</b> No agency overhead in your invoice.</span></li>
          <li><ShieldCheck /><span><b>You own the code.</b> Full source and handover, always.</span></li>
        </ul>
      </div>
    </section>
  );
}
