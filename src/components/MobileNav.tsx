import TextLink from "./TextLink"

export default function MobileNav() {
  return (
    <nav className="my-4 mx-4 flex justify-between">
      <h1 className="font-display text-[24px] text-[#00945b] uppercase">Cindy Ha</h1>
      <div className="flex flex-col gap-1 text-right">
        <TextLink word="WORK" target="/" />
        <TextLink word="SKILLS" target="/" />
        <TextLink word="ABOUT" target="/" />
        <TextLink word="CONTACT" target="/" />
      </div>
    </nav>
  )
}