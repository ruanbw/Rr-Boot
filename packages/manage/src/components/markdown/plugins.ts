import breaks from '@bytemd/plugin-breaks'
import frontmatter from '@bytemd/plugin-frontmatter'
import gemoji from '@bytemd/plugin-gemoji'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
// import highlightSsr from '@bytemd/plugin-highlight-ssr'
import math from '@bytemd/plugin-math'
// import mathSsr from '@bytemd/plugin-math-ssr'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'

export const plugins = [
    breaks(),
    frontmatter(),
    gemoji(), 
    gfm(), 
    highlight(), 
    math(), 
    mermaid(), 
    mediumZoom()
]
