# zQuery for VS Code

Full developer tooling for the [zQuery (zero-query)](https://github.com/tonywied17/zero-query) frontend library — autocomplete, hover documentation, HTML directive support, and 55+ code snippets.

---

## Features

### Autocomplete

Type `$.` anywhere in JavaScript or TypeScript to instantly see every method on the `$` namespace — complete with descriptions, signatures, and smart insert text.

- **Namespace completions** — `$.*`, `$.http.*`, `$.storage.*`, `$.session.*`, `$.bus.*`
- **Collection chain completions** — `$.all('selector').` suggests 50+ chainable methods
- **HTML directive completions** — `@` triggers event directives, `z-` triggers zQuery directives inside HTML tags

### Hover Documentation

Hover over any `$` method call or HTML directive to see rich inline documentation with code examples.

- `$.component`, `$.mount`, `$.http.get`, `$.storage.get`, `$.bus.on`, and more
- Directive docs for `@click`, `@submit.prevent`, `z-model`, `z-ref`, `z-link`
- Works across **JavaScript**, **TypeScript**, and **HTML** files

### Code Snippets

**55+ snippets** for rapid development — type `zq-` to browse them all.

#### JavaScript / TypeScript

| Prefix | Description |
|--------|-------------|
| `zq-component` | Full component definition with setup, template, and styles |
| `zq-component-simple` | Minimal component scaffold |
| `zq-router` | SPA router with history mode |
| `zq-store` | Store with state, actions, and getters |
| `zq-get` / `zq-post` | HTTP GET / POST requests |
| `zq-http-try` | HTTP request with error handling |
| `zq-signal` | Reactive signal |
| `zq-computed` | Computed signal |
| `zq-effect` | Reactive effect |
| `zq-mount` | Mount a component to the DOM |
| `zq-bus-on` / `zq-bus-emit` | Event bus subscribe / emit |
| `zq-guard` | Router navigation guard |
| `zq-import` | ESM import statement |

#### HTML

| Prefix | Description |
|--------|-------------|
| `z-model` | Two-way data binding |
| `z-ref` | Element reference |
| `z-link` | Client-side router link |
| `@click` / `@submit` / `@input` | Event handler attributes |
| `zq-form` | Complete form with z-model bindings |
| `zq-nav` | Navigation bar with z-links |
| `zq-tag` | Custom component element |

---

## Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `zquery.enable` | `boolean` | `true` | Enable or disable zQuery IntelliSense |

## Requirements

- VS Code **1.75.0** or later
- No additional dependencies

## Links

- [zQuery on npm](https://www.npmjs.com/package/zero-query)
- [zQuery on GitHub](https://github.com/tonywied17/zero-query)
- [Report an Issue](https://github.com/tonywied17/zquery-vs-code/issues)

## License

MIT
