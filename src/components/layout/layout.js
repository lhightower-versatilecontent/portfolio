import { Fragment } from 'react';

export * from '../../components/scroll';

function Layout(props) {
    return (
        <Fragment>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;
