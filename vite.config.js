// in commonjs context 
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import balafon from 'vite-plugin-balafon'
import path from 'path'


export default defineConfig({
    plugins:[
        vue(),
        balafon({
            leaveIndexHtml:true,
            buildCoreAssetOutput:'lib',
            buildCoreJSAsAsset:false,
            buildCoreCssAsAsset:false,
            icons:{
                '\0default_lib':'sfsymbols',
                'ionicons': ['/Volumes/Data/Documents/IonIcons/ionicons/src/svg', 
                    'add,accessibility,airplane,airplane-outline,bag-add'],
                'sfsymbols': ['/Volumes/Data/Documents/SfSymbols/symbols',
                    ['eraser,cloud.heavyrain.circle,bolt.shield.fill,graduationcap.fill',
                        'scribble', 'person.2.wave.2.fill'
                    ].join(',')
                ]
            }
        })
    ],
    build: {
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: "app-[name].js",
                chunkFileNames: "js/[name].js",
                assetFileNames: "[ext]/[name].[ext]"
            }
        }
    },
    resolve: {
        alias:{
            '@':path.resolve(__dirname, '/src')
        },
        preserveSymlinks: false
    }
})
