import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ShaderBackgroundImage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    loader.load("/src/assets/14899.jpg", (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;

      const uniforms = {
        TIME: { value: 0.0 },
        RENDERSIZE: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        inputImage: { value: texture },
        autoScan: { value: true },
        xScanline: { value: 0.5 },
        xScanline2: { value: 0.5 },
        yScanline: { value: 0.0 },
        xScanlineSize: { value: 0.5 },
        xScanlineSize2: { value: 0.25 },
        yScanlineAmount: { value: 0.05 },
        grainLevel: { value: 0.5 },
        scanFollow: { value: true },
        analogDistort: { value: 1.0 },
        bleedAmount: { value: 1.0 },
        bleedDistort: { value: 0.5 },
        bleedRange: { value: 1.0 },
        colorBleedL: { value: new THREE.Vector4(0.8, 0.0, 0.4, 1.0) },
        colorBleedC: { value: new THREE.Vector4(0.0, 0.5, 0.9, 1.0) },
        colorBleedR: { value: new THREE.Vector4(0.8, 0.0, 0.4, 1.0) }
      };

      const fragmentShader = `
        uniform float TIME;
        uniform vec2 RENDERSIZE;
        uniform sampler2D inputImage;
        uniform bool autoScan;
        uniform float xScanline;
        uniform float xScanline2;
        uniform float yScanline;
        uniform float xScanlineSize;
        uniform float xScanlineSize2;
        uniform float yScanlineAmount;
        uniform float grainLevel;
        uniform bool scanFollow;
        uniform float analogDistort;
        uniform float bleedAmount;
        uniform float bleedDistort;
        uniform float bleedRange;
        uniform vec4 colorBleedL;
        uniform vec4 colorBleedC;
        uniform vec4 colorBleedR;

        const float tau = 6.28318530718;

        float rand(vec3 co) {
          return abs(mod(sin(dot(co.xyz ,vec3(12.9898,78.233,45.5432))) * 43758.5453, 1.0));
        }

        void main() {
          vec2 loc = gl_FragCoord.xy / RENDERSIZE.xy;
          float actualXLine = (!autoScan) ? xScanline :
            mod(xScanline + ((1.0+sin(0.34*TIME))/2.0 +
            (1.0+sin(TIME))/3.0 +
            (1.0+cos(2.1*TIME))/3.0 +
            (1.0+cos(0.027*TIME))/2.0) / 3.5, 1.0);

          float actualXLineWidth = (!autoScan) ? xScanlineSize :
            2.0 * xScanlineSize *
            ((1.0+sin(1.2*TIME))/2.0 +
             (1.0+cos(3.91*TIME))/3.0 +
             (1.0+cos(0.014*TIME))/2.0) / 3.5;

          float dx = 1.0+actualXLineWidth/25.0-abs(distance(loc.y, actualXLine));
          float dx2 = 1.0+xScanlineSize2/10.0-abs(distance(loc.y, xScanline2));

          float dy = autoScan
            ? (1.0-abs(distance(loc.y, mod(yScanline+TIME,1.0))))
            : (1.0-abs(distance(loc.y, yScanline)));

          dy = (dy > 0.5) ? 2.0 * dy : 2.0 * (1.0 - dy);

          float rX = (scanFollow) ? rand(vec3(dy,actualXLine,analogDistort))
                                  : rand(vec3(dy,bleedAmount,analogDistort));
          float xTime = (actualXLine > 0.5) ? 2.0 * actualXLine : 2.0 * (1.0 - actualXLine);

          loc.x += yScanlineAmount * dy * 0.025 + analogDistort * rX/(RENDERSIZE.x/2.0);

          if(dx2 > 1.0 - xScanlineSize2 / 10.0) {
            float rX2 = (dy * rand(vec3(dy,dx2,dx)) + dx2) / 4.0;
            float distortAmount = analogDistort *
              (sin(rX * tau / dx2) + cos(rX * tau * 0.78 / dx2)) / 10.0;
            loc.x += (1.0 + distortAmount * sin(tau * loc.x / rX2) - 1.0) / 15.0;
          }
          if(dx > 1.0 - actualXLineWidth / 25.0)
            loc.y = actualXLine;

          loc.x = mod(loc.x,1.0);
          loc.y = mod(loc.y,1.0);

          vec4 c = texture2D(inputImage, loc);
          c -= rand(vec3(loc.x, loc.y, xTime)) * xTime / (5.0-grainLevel);

          gl_FragColor = c;
        }
      `;

      const geometry = new THREE.PlaneGeometry(2, 2);
      const material = new THREE.ShaderMaterial({
        uniforms,
        fragmentShader
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      let frameId;
      const animate = () => {
        uniforms.TIME.value += 0.02;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.RENDERSIZE.value.set(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        mountRef.current.removeChild(renderer.domElement);
      };
    });
  }, []);

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
}
