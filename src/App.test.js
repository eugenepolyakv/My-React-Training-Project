import { create } from 'react-test-renderer';
import App from './App';
import ProfileStatus from './components/Profile/ProfileInfo/ProfileStatus';

// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/something/);
//     expect(linkElement).toBeInTheDocument();
// });

describe('ProfileStatus suite tests', () => {
    test('Check if props were passed properly', () => {
        const component = create(<ProfileStatus status="Some status" />);
        const instance = component.getInstance();
        expect(instance.state.temporaryStatus).toBe('Some status');
    });
    test('Span must displayed', () => {
        const component = create(<ProfileStatus status="Some status" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('Some status');
    });
    // test('Input must be displayed in editMode instead of span', () => {
    //     const component = create(<ProfileStatus status="Some status" />);
    //     const root = component.root;
    //     let span = root.findByType('span');
    //     span.props.onClick();
    //     let input = root.findByType('input');
    //     expect(input.props.value).toBe('Some status');
    // });
});
