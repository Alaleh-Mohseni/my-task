export default function darkMode(className, theme) {
    return [className, `${className}--${theme}`].join(' ')
}