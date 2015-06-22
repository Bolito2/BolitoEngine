#version 130

in vec2 fragmentPosition;
in vec4 fragmentColor;
in vec2 fragmentUV;

out vec4 color;

uniform float time;
uniform sampler2D mySampler;

void main(){
vec4 textureColor = texture(mySampler, fragmentUV);
color = textureColor;
}

//color = fragmentColor + vec4(1.0 * (cos(time) + 1.0) * 0.5, 1.0 * (cos(time + 2.0) + 1.0) * 0.5, 1.0 * (sin(time + 1.0) + 1.0) * 0.5, 1.0) ;