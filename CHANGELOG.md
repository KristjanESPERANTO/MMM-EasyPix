# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.3.0](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.2.0...v1.3.0) (2026-09-12)

### Added

* add cacheBuster option for external webcam image URLs ([#8](https://github.com/KristjanESPERANTO/MMM-EasyPix/issues/8)) ([5a15bda](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/5a15bda70754775cadbbf4d01c38994557de875b))

### Chores

* add Prettier config ([9d00229](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/9d00229fa082988b45f25af60283bc202d93788b))
* update devDependencies ([4432011](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/4432011a93d1181ad799c3505e0cbd7e0a0d7433))
## [1.2.0](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.10...v1.2.0) (2026-09-05)

### Added

* add CI workflow for linting, spelling, and unit tests ([cb30766](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/cb30766f9c652902c4ff4c72b246f53b901c3f70))
* add demo config and script ([3f1a33e](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/3f1a33e4df366d7e105dafed56c9b2bcb1c4cda6))

### Fixed

* clear update timer on stop ([8cdf7d0](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/8cdf7d01a695d818466859d5421c350495b16008))
* validate configured picture name ([d43518f](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/d43518f50ba9f94775f452618376297881629af3))

### Chores

* add release script for versioning ([2511768](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/2511768d44e1e183596485f37011d4f5760f2372))
* correct contributors format in package.json ([3e74f8c](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/3e74f8ca1651c9770dd2e93a418bb08a6ccde731))
* replace husky with simple-git-hooks ([7b6643b](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/7b6643b9c5ecf9d2582e621c350ff86f3c004bcf))
* update devDependencies ([a2a720d](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/a2a720d0ca232df7bdc2c3b784f14449af4b34c0))

### Code Refactoring

* simplify linter rules and apply new ruleset ([1edd70a](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/1edd70a195ea3600332eb05d7b81b7ba2521cc83))

### Tests

* add unit tests ([7f0257e](https://github.com/KristjanESPERANTO/MMM-EasyPix/commit/7f0257e59806b8c13ce882acfdc544d07440e1fe))
## [1.1.10](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.9...v1.1.10) - 2025-09-01

### Changed

- chore: add dependabot configuration for GitHub Actions and npm updates
- chore: reduce ESLint rules
- chore: update devDependencies
- docs: simplify configuration example

## [1.1.9](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.8...v1.1.9) - 2025-07-26

### Changed

- chore: update devDependencies
- docs: add section for slideshow functionality options
- docs: optimize config section
- refactor: remove `Hello-Lucy` related parts (`Hello-Lucy` is deprecated and no longer maintained)
- refactor: remove unused method `randomImgLink`

## [1.1.8](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.7...v1.1.8) - 2025-06-13 - Maintenance update

### Changed

- chore: add `"type": "module"` to `package.json`
- chore: drop .mjs files
- chore: update devDependencies
- docs: optimize wording "folder -> directory"

## [1.1.7](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.6...v1.1.7) - 2025-05-15 - Maintenance update

### Changed

- chore: add `husky` to `devDependencies`
- chore: update devDependencies
- chore: use `node --run` instead of `npm run` to run scripts
- chore: review `lint-staged` setup
- chore: simplify linting setup by removing `stylelint` and `markdownlint`

## [1.1.6](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.5...v1.1.6) - 2025-04-21 - Maintenance update

### Changed

- chore: update devDependencies
- chore: update ESLint configuration to use new import plugin structure
- chore: clean up ESLint rules by removing unnecessary settings and improving consistency
- docs: add npm install command to developer commands section
- refactor: replace 'self' with 'that' for consistency in context binding

## [1.1.5](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.4...v1.1.5) - 2025-03-17 - Maintenance update

### Changed

- chore: Update devDependencies
- chore: Simplify stylelint configuration

## [1.1.4](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.3...v1.1.4) - 2025-02-24 - Maintenance update

- chore: Update devDependencies
- chore: Simplify ESLint calls
- chore: Replace `eslint-plugin-import` by `eslint-plugin-import-x`
- chore: Replace deprecated `all-flat` by `all` stylistic config
- chore: Remove release script
- chore: Install husky

## [1.1.3](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.2...v1.1.3) - 2025-02-08

- Fix: Use valid property for float
- chore: Fix cspell issue
- chore: Update devDependencies

## [1.1.2](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.1...v1.1.2) - 2024-12-18 - Maintenance update

- chore: Add CHANGELOG
- chore: Add License and Changelog section to README
- chore: Update project status in README
- chore: Update devDependencies

## [1.1.1](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.1.0...v1.1.1) - 2024-10-12

## [1.1.0](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.0.2...v1.1.0) - 2024-11-04

## [1.0.2](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.0.1...v1.0.2) - 2023-12-23

- chore: Switch to ESLint flat config

## [1.0.1](https://github.com/KristjanESPERANTO/MMM-EasyPix/compare/v1.0.0...v1.0.1) - 2023-12-02 - First fork version 🚀

### Changed

- Switch clone command to fork
- chore: Add linter
- chore: Handle linter issues and rework
- chore: Update devDependencies
- chore: Update URLs
