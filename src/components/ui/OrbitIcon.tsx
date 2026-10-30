interface Props {
  name: string;
  src: string;
  angle: number;
  radius: number;
  size?: number;
}

export const OrbitIcon = ({ name, src, angle, radius, size = 32 }: Props) => {
  const radians = (angle * Math.PI) / 180;

  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return (
    <img
      src={src}
      alt={name}
      title={name}
      className="absolute object-contain"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x * 100}cqw), calc(-50% + ${y * 100}cqw))`,
        opacity: "50%",
      }}
    />
  );
};
