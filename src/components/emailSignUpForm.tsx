import React from "react";
import { postJson } from "../api/util";

const states = {
  INITIAL: "initial",
  LOADING: "loading",
  SUBSCRIBED: "subscribed",
  FAILED: "failed",
};

export default class EmailSignUpFormComponent extends React.Component<
  any,
  any
> {
  constructor(props: any ) {
    super(props);
    this.state = {
      email: "",
      errorMessage: null,
      currentState: states.INITIAL,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  ctaButtonText() {
    switch (this.state.currentState) {
      case states.SUBSCRIBED:
        return "You're on the list!";
      case states.LOADING:
        return "Loading...";
      case states.FAILED:
        return "Sorry!";
      case states.INITIAL:
        return "Notify me";
    }
  }

  stripHtmlEntities(str: string) {
    return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  async onSubmit(event: any) {
    event.preventDefault();
    this.setState({
      currentState: states.LOADING,
      errorMessage: null,
    });
    const url = "/api/v1/signups/create";
    const { email } = this.state;
    if (email.length === 0) {
      return;
    }
    const body = { email };
    const postParams = {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(body),
    };
    try {
      await postJson(url, postParams);
      this.setState({ currentState: states.SUBSCRIBED });
    } catch(error: any) {
      error.json().then((msg: any) => {
        this.setState({
          currentState: states.FAILED,
          errorMessage: `Email ${msg.email}`,
        });
      });
    }
  }

  onChange(event: any) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { currentState } = this.state;
    const isLoading = currentState === states.LOADING;
    const isSubscribed = currentState === states.SUBSCRIBED;
    const isFailed = this.state.currentState === states.FAILED;
    return (
      <form
        className="bg-white flex items-center justify-between px-4 sm:px-6 lg:px-14 md:py-12 rounded-lg shadow"
        onSubmit={this.onSubmit}
      >
        {isFailed && (
          <p className="text-white font-weight-bold">
            Sorry, something went wrong submitting your information:
            <br />
            {this.state.errorMessage}.<br />
            Please try again later.
          </p>
        )}
        {isSubscribed && (
          <p className="text-white font-weight-bold">
            Thanks for your interest.
            <br />
            You'll get an email from us when it's available. Stay tuned!
          </p>
        )}
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          type="email"
          className="appearance-none flex-grow mr-4 rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-lg"
          id="email"
          name="email"
          placeholder="Your email address"
          aria-describedby="emailHelp"
          required
          onChange={this.onChange}
        />
        <button
          type="submit"
          className={`group relative justify-center py-2 px-4 border border-transparent sm:text-sm md:text-lg font-medium rounded-md text-white text-gray-700 font-semibold bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
            (isLoading || isSubscribed) && "disabled"
          }`}
        >
          {isLoading && (
            <div
              className="spinner-border spinner-border-sm"
              role="status"
              style={{ marginRight: "5px" }}
            >
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {this.ctaButtonText()}
        </button>
      </form>
    );
  }
}