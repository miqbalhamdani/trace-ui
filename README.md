# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Todo

## Fixing

1. remove @tabler/icons-vue in all component (high)
2. check vee-validate (iqbal)
3. check @import "@/assets/scss/style"; import in all component scss. (iqbal)
4. check flag icon and i18n-iso-countries dependency. (iqbal)
5. update variable countryTelephoneCodes into json file InputTel (medium)
6. re adding tippy in sidebar (medium)
7. remove all comment (medium)
8. adjust tooltip shadcn-vue tooltip to existing design. then change tippy tooltip to shadcn-vue tooltip (future)

Iqbal: will check first before fixing
Priority: (high, medium, low)
Futur: will be fixed in a couple of months

## Report

to check performance of bundle

```
pnpm run reports
```

### High Priority

- [x] Alert
- [x] Button
- [ ] Card
- [x] Checkbox
- [ ] Select Box / Combobox
- [ ] Datepicker
- [ ] Table
- [x] Input
- [x] Input Dropdown
- [x] Input Select
- [x] Input Telephone
- [x] Textarea
- [x] Link
- [x] Label / Typography
- [ ] Pagination

### Medium Priority

- [ ] Alert Dialog
- [ ] Dialog / Modal
- [x] Radio Group
- [ ] Tabs
- [x] Toast

### Low Priority

- [ ] Accordion
- [ ] Badge
- [x] Progress Bar
- [x] Loading / Spinner
- [x] Loading / Progress
- [ ] Skeleton
- [x] Switch
- [x] Chips
- [ ] Tooltip
- [ ] Icon

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

Start the development server on `http://localhost:3000`

```bash
pnpm run dev
```

To check and automaticly fixing linter before commit

```bash
pnpm run lint
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Commit Format

Format

```bash
[type]([component name]): [comment]
```

Example

```bash
feat(button): add comment section

fix(button): adding validation

style(button): update variant
```

Notes:

1. Create branch for every component
2. [comment] mush using lowercase and without symbol
3. ...
