import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {Counter} from '../components/Counter';
import {addCount, resetCount} from '../actions/counter';

interface Props {
  count: number,
  onAddPress: () => {},
  onResetPress: () => {},
}

class Container extends React.Component<Props, void> {

  render(): JSX.Element {
    return (
      <Counter
        count={this.props.count}
        onAddPress={this.props.onAddPress}
        onResetPress={this.props.onResetPress}
      />
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    count: state.counter.get('count')
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onAddPress: () => {
      dispatch(addCount);
    },
    onResetPress: () => {
      dispatch(resetCount);
    },
  };
};

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
