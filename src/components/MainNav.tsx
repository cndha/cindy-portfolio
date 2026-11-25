import TextLink from "./TextLink"

export default function MainNav() {
  return (
    <nav className="flex justify-center justify-items-center items-center gap-[3em] lg:gap-[6em] xl:gap-[10em] mt-4">
      <div className="flex gap-10">
        <TextLink word="WORK" target="/" />
        <TextLink word="SKILLS" target="/" />
      </div>
      <h1 className="font-display text-[24px] text-[#00945b] uppercase">Cindy Ha</h1>
      <div className="flex gap-10">
        <TextLink word="ABOUT" target="/" />
        <TextLink word="CONTACT" target="/" />
      </div>
    </nav>
  )

}