type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <main className="bg-gradient-to-b from-primary from-0% via-primary/50 via-40% to-transparent to-70% mx-auto">{children}</main>
  )
}

export default Container