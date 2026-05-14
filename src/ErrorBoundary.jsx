import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component{
    state={hasError:false}

    static getDerivedStateFromError(){
        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.error("ErrorBoundary caught stupid error",error,info)
    }
    render(){
        if(this.state.hasError){
            return(
                <div onClick={this.celebrateError} className="error-boundary">
                    <h2>Uh oh!</h2>
                    <p>There was an error with this page.<Link to="/">Click Here </Link>
                        to go back to home page
                    </p>
                </div>
            )
        }
        return this.props.children;

    }
}

export default ErrorBoundary