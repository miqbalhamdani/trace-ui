<template>
  <div style="display: flex; gap: 24px">
    <KtvProgressBar
      size="small"
      variant="info"
      type="contextual"
      :value="100"
    />
    <KtvProgressBar
      size="medium"
      variant="error"
      type="striped"
      :value="50"
    />
    <KtvProgressBar
      size="large"
      variant="warning"
      type="striped"
      :value="100"
      animated
    />

    <KtvSpinner
      size="small"
      variant="warning"
    />
    <KtvSpinner
      size="medium"
      variant="error"
    />
    <KtvSpinner
      size="large"
      variant="info"
    />
    <KtvSpinner
      size="small"
      variant="general"
      type="grow"
    />
    <KtvSpinner
      size="medium"
      variant="warning"
      type="grow"
    />
    <KtvSpinner
      size="large"
      variant="success"
      type="grow"
    />
  </div>
</template>
