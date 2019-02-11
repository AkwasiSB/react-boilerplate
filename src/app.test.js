import { App } from './app';

test('if index renders well', () => {
    const indexWrapper = shallow(<App />);

    expect(indexWrapper).toMatchSnapshot();

    expect(indexWrapper.text()).toBe('Hello World!');
})
