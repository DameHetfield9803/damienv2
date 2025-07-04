import Link from "next/link";

export default function Contact() {
  return(
    <div className="mx-auto text-center p-3 space-y-3">
        <h1 className="text-3xl">Contact me!</h1>
        <p>You can contact me through <Link href={"mailto:damiendkfoo530@gmail.com"}>My email</Link> here.</p>
        <footer>
            Thank you once again for visiting.
        </footer>
    </div>
  )
}
