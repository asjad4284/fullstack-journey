import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route=createLazyFileRoute('/contact')({
    component:ContactRoute,
})

function ContactRoute(){
    const Mutation=useMutation({
        mutationFn:function (e){
            e.preventDefault()
            const formData= new FormData(e.target)
            return postContact(
                formData.get("name"),
                formData.get("email"),
                formData.get("message"),
            )
        }
    })
    return (
        <div className="contact">
            <h1>Contact</h1>
            {Mutation.isSuccess ? (
                <h3>Submitted!</h3>
            ): (
                <form onSubmit={Mutation.mutate}>
                    <input name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            )}
        </div>
    )
}