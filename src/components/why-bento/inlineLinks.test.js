import { renderToStaticMarkup } from 'react-dom/server';
import { renderInlineLinks } from './inlineLinks';

const html = (t) => renderToStaticMarkup(<p>{renderInlineLinks(t, 'x')}</p>);

test('plain text unchanged', () => {
  expect(html('No links here.')).toBe('<p>No links here.</p>');
});

test('one link', () => {
  expect(html('We lock down [Microsoft 365](/microsoft-365), then.'))
    .toBe('<p>We lock down <a href="/microsoft-365" class="x">Microsoft 365</a>, then.</p>');
});

test('two links', () => {
  expect(html('[A](/a) and [B](https://example.com/b)'))
    .toBe('<p><a href="/a" class="x">A</a> and <a href="https://example.com/b" class="x">B</a></p>');
});

test('unsafe href stays text', () => {
  expect(html('[x](javascript:alert(1))')).not.toContain('<a');
  expect(html('[x](//evil.example)')).toBe('<p>[x](//evil.example)</p>');
});

test('stray brackets stay text', () => {
  expect(html('Zones [1 and 2] only')).toBe('<p>Zones [1 and 2] only</p>');
});
