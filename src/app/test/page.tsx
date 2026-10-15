import Button from "@/components/Button";

// 실습용 테스트 페이지: Button을 크기·상태별로 모두 보여준다
const sizes = ["sm", "md", "lg"] as const;

export default function TestPage() {
  return (
    <main className="mx-auto flex max-w-md flex-col gap-section px-page-horizontal py-section">
      <h1 className="text-heading-lg text-text-primary">Button 테스트</h1>

      {sizes.map((size) => (
        <section key={size} className="flex flex-col gap-stack-sm">
          <h2 className="text-label-lg text-text-primary">size=&quot;{size}&quot;</h2>
          <div className="flex flex-wrap items-center gap-stack-sm">
            <Button size={size}>기본</Button>
            <Button size={size} disabled>
              비활성
            </Button>
          </div>
          <Button size={size} className="w-full">
            전체 폭
          </Button>
        </section>
      ))}

      <p className="text-body-md text-text-secondary">
        마우스를 버튼 위에 올리면 hover 상태를 볼 수 있습니다.
      </p>
    </main>
  );
}
