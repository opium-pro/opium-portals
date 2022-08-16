# opium-portals
Portals for Rect Native and React Dom

## 1. Install the package
```
npm i opium-portals
```

## 2. Wrap your app
```jsx
import { PortalsProvider } from 'opium-portals'

const App = () => <PortalsProvider>
  Place your app here.
  All portals will be placed right after your app.
</PortalsProvider>
```

## 3. Optionally add a wrapper
```jsx
import { PortalsProvider } from 'opium-portals'

// This component will wrap every portal
const Wrapper = ({children}) => children

const App = () => <PortalsProvider Wrapper={Wrapper}>
  Place your app here.
  All portals will be placed right after your app.
</PortalsProvider>
```

## 4. Use portal component
```jsx
import { Portal } from 'opium-portals'

const MyComponent = () => <Portal>
  Your code here
</Portal>
```

## 5. Or use HOC
```jsx
import { withPortal } from 'opium-portals'

const MyComponent = withPortal(() => 'Your code here')
```

to call your component inside the portal, use `inPortal` prop

```jsx
<MyComponent inPortal >
```

