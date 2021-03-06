/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
import Scene from 'Scene';
import Diagnostics from 'Diagnostics';

import Shaders from 'Shaders';
import Materials from 'Materials'
import R from 'Reactive'
// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]

    const viewProjectionMatrix = Shaders.vertexTransform( {variableName: Shaders.BuiltinUniform.VP_MATRIX} ) //Doesn't work 
    // const viewProjectionMatrix = Shaders.vertexTransform( {'variableName': Shaders.BuiltinUniform.VP_MATRIX} )  //Doesn't work 
    const material0 = await Materials.findFirst('material0')
    material0.setTextureSlot(Shaders.DefaultMaterialTextures.DIFFUSE, R.pack4(1.0,0,0,0.5)) 
    // To access scene objects
    // const [directionalLight] = await Promise.all([
    //   Scene.root.findFirst('directionalLight0')
    // ]);

    // To access class properties
    // const directionalLightIntensity = directionalLight.intensity;

    // To log messages to the console
    // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]
