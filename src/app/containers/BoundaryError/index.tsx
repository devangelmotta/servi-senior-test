import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
interface IErrorBoundaryState {
    isError: boolean;
}

export class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = {isError: false};
  }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ isError: true});
    }

    render(): any {
        if (this.state.isError) {
            return ( 
               <Redirect to="/internal-error" /> 
            );
        }

        return this.props.children;
    }
}