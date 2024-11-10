#version 300 es

precision mediump float;  // Set precision for floats

in vec2 fragTexCoord;       // Texture coordinates from vertex shader
uniform sampler2D texture0; // The texture sampler
uniform vec4 glowColor;     // Color of the glow
uniform float glowIntensity; // Intensity of the glow effect

out vec4 FragColor;

void main()
{
    // Get the original color from the texture
    vec4 texColor = texture(texture0, fragTexCoord);

    // Compute the brightness of the pixel (luminance formula)
    float brightness = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));

    // Determine the glow amount based on brightness and intensity
    vec4 glow = glowColor * glowIntensity * brightness;

    // Blend the glow with the original texture color
    FragColor = texColor + glow;
}
